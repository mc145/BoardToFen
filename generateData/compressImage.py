from PIL import Image
import os
import PIL 
import glob 

os.chdir('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/generateData/rawdata/wpawn') 

counter = 1

for img in os.listdir():
    image = Image.open(img) 
    resized_image = image.resize((64,64))
    print(resized_image.size) 
    resized_image = resized_image.save(f'C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/wpawn/{counter}compressedwpawn.png')  
    counter += 1


os.chdir('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/generateData/rawdata/wknight') 

counter = 1

for img in os.listdir():
    image = Image.open(img) 
    resized_image = image.resize((64,64))
    print(resized_image.size) 
    resized_image = resized_image.save(f'C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/wknight/{counter}compressedwknight.png')  
    counter += 1

os.chdir('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/generateData/rawdata/wbishop') 

counter = 1

for img in os.listdir():
    image = Image.open(img) 
    resized_image = image.resize((64,64))
    print(resized_image.size) 
    resized_image = resized_image.save(f'C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/wbishop/{counter}compressedwbishop.png')  
    counter += 1


os.chdir('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/generateData/rawdata/wrook') 

counter = 1

for img in os.listdir():
    image = Image.open(img) 
    resized_image = image.resize((64,64))
    print(resized_image.size) 
    resized_image = resized_image.save(f'C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/wrook/{counter}compressedwrook.png')  
    counter += 1





os.chdir('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/generateData/rawdata/wqueen') 

counter = 1

for img in os.listdir():
    image = Image.open(img) 
    resized_image = image.resize((64,64))
    print(resized_image.size) 
    resized_image = resized_image.save(f'C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/wqueen/{counter}compressedwqueen.png')  
    counter += 1


os.chdir('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/generateData/rawdata/wking') 

counter = 1

for img in os.listdir():
    image = Image.open(img) 
    resized_image = image.resize((64,64))
    print(resized_image.size) 
    resized_image = resized_image.save(f'C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/wking/{counter}compressedwking.png')  
    counter += 1


os.chdir('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/generateData/rawdata/bpawn') 

counter = 1

for img in os.listdir():
    image = Image.open(img) 
    resized_image = image.resize((64,64))
    print(resized_image.size) 
    resized_image = resized_image.save(f'C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/bpawn/{counter}compressedbpawn.png')  
    counter += 1


os.chdir('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/generateData/rawdata/bknight') 

counter = 1

for img in os.listdir():
    image = Image.open(img) 
    resized_image = image.resize((64,64))
    print(resized_image.size) 
    resized_image = resized_image.save(f'C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/bknight/{counter}compressedbknight.png')  
    counter += 1

os.chdir('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/generateData/rawdata/bbishop') 

counter = 1

for img in os.listdir():
    image = Image.open(img) 
    resized_image = image.resize((64,64))
    print(resized_image.size) 
    resized_image = resized_image.save(f'C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/bbishop/{counter}compressedbbishop.png')  
    counter += 1


os.chdir('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/generateData/rawdata/brook') 

counter = 1

for img in os.listdir():
    image = Image.open(img) 
    resized_image = image.resize((64,64))
    print(resized_image.size) 
    resized_image = resized_image.save(f'C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/brook/{counter}compressedbrook.png')  
    counter += 1





os.chdir('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/generateData/rawdata/bqueen') 

counter = 1

for img in os.listdir():
    image = Image.open(img) 
    resized_image = image.resize((64,64))
    print(resized_image.size) 
    resized_image = resized_image.save(f'C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/bqueen/{counter}compressedbqueen.png')  
    counter += 1


os.chdir('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/generateData/rawdata/bking') 

counter = 1

for img in os.listdir():
    image = Image.open(img) 
    resized_image = image.resize((64,64))
    print(resized_image.size) 
    resized_image = resized_image.save(f'C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/bking/{counter}compressedbking.png')  
    counter += 1


