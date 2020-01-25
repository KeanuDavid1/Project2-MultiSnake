from bluepy import btle

class HeartRateDelegate(btle.DefaultDelegate):
    def __init__(self,par_playerNo):
        btle.DefaultDelegate.__init__(self)
        # ... initialise here
        self.playerNo = par_playerNo
        self.__hearth_rate = 0

    @property
    def playerNumber(self):
        return self.playerNo

    @playerNumber.setter
    def playerNumber(self, value):
        self.playerNo = value

    @property
    def hearth_rate(self):
        return self.__hearth_rate

    @hearth_rate.setter
    def hearth_rate(self, value):
        self.__hearth_rate = value

    def handleNotification(self, cHandle, data):
        self.hearth_rate = int.from_bytes(data, byteorder='big', signed=True)
        # print()