from bluepy import btle
from models.HeartRateDelegate import HeartRateDelegate

class HRM():
    def __init__(self,par_MAC,par_playerNo):
        self.MAC = par_MAC
        self.playerNumber = par_playerNo
        self.delegate = HeartRateDelegate(par_playerNo)
        try:
            self.device = btle.Peripheral(par_MAC,iface='0')
            self.device.setDelegate(self.delegate)
            self.enable_notify()
        except:
            print("Initial connection failed with {0} HRM".format(self.MAC))
            # raise Exception(self)

    @property
    def heart_rate(self):
        return self.delegate.hearth_rate



    def enable_notify(self):
        setup_data = b"\x01\x00"
        notify = self.device.getCharacteristics(uuid='00002a37-0000-1000-8000-00805f9b34fb')[0]
        notify_handle = notify.getHandle() + 1
        self.device.writeCharacteristic(notify_handle, setup_data, withResponse=True)
        self.device.writeCharacteristic(16, bytes([0xAA]))

    def reconnect(self):
        try:
            self.device.disconnect()
            self.device.connect(self.MAC,iface='0')
            self.device.setDelegate(self.delegate)
            self.enable_notify()
            print('player {0} reonnected!'.format(self.playerNumber))
        except btle.BTLEDisconnectError as ex:
            self.reconnect()