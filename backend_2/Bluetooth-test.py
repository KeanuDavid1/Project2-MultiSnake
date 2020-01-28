from bluepy import btle
import bluepy
import time
from models.HRM import HRM


sc = bluepy.btle.Scanner()
scan_results = sc.scan(10)

for scan in scan_results:
    print("{} | {}".format(scan.getScanData(),scan.addr))




    # print("Waiting...")
    # Perhaps do something else here

