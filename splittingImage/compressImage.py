from PIL import Image
import os
import PIL 
import glob 

os.chdir('/home/mc145/Programming/BoardToFen/splittingImage/splitImages') 



for counter in range(1, 65):
    image = Image.open(f'/home/mc145/Programming/BoardToFen/splittingImage/splitImages/start_{counter}_.png') 
    resized_image = image.resize((64,64))
    print(resized_image.size) 
    resized_image = resized_image.save(f'/home/mc145/Programming/BoardToFen/splittingImage/finalImages/{counter}_square.png')  
    counter += 1


