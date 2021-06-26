import os
import sys
from PIL import Image
import numpy as np
from itertools import product

def tile(filename, dir_in, dir_out, d):
    counter = 1
    name, ext = os.path.splitext(filename)
    img = Image.open(os.path.join(dir_in, filename))
    w, h = img.size
    
    grid = list(product(range(0, h-h%d, d), range(0, w-w%d, d)))
    for i, j in grid:
        box = (j, i, j+d, i+d)
        out = os.path.join(dir_out, f'{name}_{counter}_{ext}')
        img.crop(box).save(out)
        counter += 1


filename = '/home/mc145/Programming/BoardToFen/splittingImage/start.png'
in_dir = '/home/mc145/Programming/BoardToFen/splittingImage'
save_dir = '/home/mc145/Programming/BoardToFen/splittingImage/splitImages'

imgs = Image.open(filename) 
width, height = imgs.size 

tile('start.png', in_dir, save_dir, int(width/8)) 