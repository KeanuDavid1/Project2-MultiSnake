import os

from luma.core.interface.serial import i2c
from luma.core.render import canvas
from luma.oled.device import ssd1306, ssd1325, ssd1331, sh1106
import time
from PIL import ImageFont, ImageDraw, Image

serial = i2c(port=1, address=0x3C)
device = ssd1306(serial, rotate=0)

# Box and text rendered in portrait mode
with canvas(device) as draw:
    # draw.rectangle(device.bounding_box, outline="white", fill="black")
    font = ImageFont.truetype('./ComicSansMS3.ttf',20)
    # draw.text((10, 20), "Anusjes", fill="red",font=font)
    image = Image.open('pepe.jpg').resize((device.width, device.height), Image.ANTIALIAS).convert('1')



while 1:
    device.display(image)
    time.sleep(1)