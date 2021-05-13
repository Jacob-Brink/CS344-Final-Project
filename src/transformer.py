# Andrew Baker

import numpy as np
from PIL import Image as im
import sys

def copy(new, old, front, newCornerX, newCornerY, oldCornerX, oldCornerY, height, width):
    yint = 0
    for y in range(newCornerY, newCornerY + height):
        xint = 0
        for x in range(newCornerX, newCornerX + width):
            new[y][x+front] = old[yint+oldCornerY][xint+oldCornerX]
            xint += 1
        yint += 1

def shift(file):
    image = np.array(im.open(file))
    print(image.shape)

    zero = np.zeros((32*4, 32*4, 4), np.uint8)
    print(zero.shape)

    # FRONT
    copy(zero, image, 0, 4*4, 0*4, 8*4, 8*4, 8*4, 8*4)  #HEAD
    copy(zero, image, 0, 0*4, 8*4, 44*4, 22*4, 12*4, 4*4) #LEFT ARM
    copy(zero, image, 0, 12*4, 8*4, 36*4, 52*4, 12*4, 4*4)    #RIGHT ARM
    copy(zero, image, 0, 4*4, 8*4, 20*4, 20*4, 12*4, 8*4)  #TORSO
    copy(zero, image, 0, 4*4, 20*4, 4*4, 20*4, 12*4, 4*4)    #LEFT LEG
    copy(zero, image, 0, 8*4, 20*4, 20*4, 52*4, 12*4, 4*4)    #RIGHT LEG
    # BACK
    copy(zero, image, 16*4, 4*4, 0*4, 24*4, 8*4, 8*4, 8*4)    #HEAD
    copy(zero, image, 16*4, 0*4, 8*4, 44*4, 52*4, 12*4, 4*4)  #LEFT ARM
    copy(zero, image, 16*4, 12*4, 8*4, 52*4, 20*4, 12*4, 4*4) #RIGHT ARM
    copy(zero, image, 16*4, 4*4, 8*4, 32*4, 20*4, 12*4, 8*4)  #TORSO
    copy(zero, image, 16*4, 4*4, 20*4, 28*4, 52*4, 12*4, 4*4) #LEFT LEG
    copy(zero, image, 16*4, 8*4, 20*4, 12*4, 20*4, 12*4, 4*4) #RIGHT LEG

    data = im.fromarray(zero)
    data.save("transform" + file)

# MAIN

shift(str(sys.argv[1]))