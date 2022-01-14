from PIL import Image
import os
import PIL 
import glob 

os.chdir('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/testing/data') 




image = Image.open('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/testing/data/photo.png') 
resized_image = image.resize((64,64))
print(resized_image.size) 
resized_image = resized_image.save(f'C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/testing/data/photo.png')  


