from bluepy import btle
import bluepy
import time

class MyDelegate(btle.DefaultDelegate):
    def __init__(self):
        btle.DefaultDelegate.__init__(self)
        # ... initialise here

    def handleNotification(self, cHandle, data):
        print(data)
        print(int.from_bytes(data, byteorder='big', signed=True))

def enable_notify(chara_uuid,dev):
    setup_data = b"\x01\x00"
    notify = dev.getCharacteristics(uuid=chara_uuid)[0]
    notify_handle = notify.getHandle() + 1
    dev.writeCharacteristic(notify_handle, setup_data, withResponse=True)

def start():
    try:
        x = btle.Peripheral('A0:9E:1A:34:79:38',iface='0')
        x.setDelegate((MyDelegate()))
        characteristics = x.getCharacteristics()
        print(characteristics)
        svc = x.getServiceByUUID('0000180d-0000-1000-8000-00805f9b34fb')
        ch = svc.getCharacteristics()[0]
        enable_notify('00002a37-0000-1000-8000-00805f9b34fb',x)
        x.writeCharacteristic(16,bytes([0xAA]))
        # print(characteristics[2].properties)

        while True:
            if x.waitForNotifications(1.0):
                # handleNotification() was called
                continue

            print("Waiting...")
            # Perhaps do something else here
    except bluepy.btle.BTLEDisconnectError:
        print('Reconnecting in 2s')
        time.sleep(2)
        start()


start()
