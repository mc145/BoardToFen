from PIL import Image

import numpy as np 
import os 

#Colors to Add: Green, Blue, 

def changeColor(piece):
    os.chdir('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/compressed_data/' + str(piece))

    counter = 1 

    for photo in os.listdir():
        img = Image.open(photo)
        img2 = Image.open(photo)
        img3 = Image.open(photo)
        img4 = Image.open(photo) 
        img5 = Image.open(photo) 
        img6 = Image.open(photo) 

        suff = 'compressed' + piece + '.png'

        img4 = img4.save('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/' + piece + '/' + str(counter) + suff)
        counter+=1 


        background_pixel = img.getpixel ((10,15)); 



        for i in range(0,64):
            for j in range(0,64):
                data = img.getpixel ((i,j))
                if(data == background_pixel):
                    img.putpixel ((i,j), (37, 137, 22))


        img = img.save('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/' + piece + '/' + str(counter) + suff)
        counter += 1

        for i in range(0,64):
            for j in range(0,64):
                data = img2.getpixel ((i,j))
                if(data == background_pixel):
                    img2.putpixel ((i,j), (74, 206, 54))


        img2 = img2.save('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/' + piece + '/' + str(counter) + suff)


        counter+=1

        for i in range(0,64):
            for j in range(0,64):
                data = img3.getpixel ((i,j))
                if(data == background_pixel):
                    img3.putpixel ((i,j), (62, 62, 223))


        img3 = img3.save('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/' + piece + '/' + str(counter) + suff)

        counter+=1

        for i in range(0,64):
            for j in range(0,64):
                data = img5.getpixel ((i,j))
                if(data == background_pixel):
                    img5.putpixel ((i,j), (63, 47, 52))


        img5 = img5.save('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/' + piece + '/' + str(counter) + suff)

        counter+=1

        for i in range(0,64):
            for j in range(0,64):
                data = img6.getpixel ((i,j))
                if(data == background_pixel):
                    img6.putpixel ((i,j), (111, 104, 106))


        img = img6.save('C:/Users/Akshay Agarwal/Desktop/Programming/BoardToFen/training/data/' + piece + '/' + str(counter) + suff)

        counter+=1
    

changeColor('wpawn') 
changeColor('wrook') 
changeColor('wknight') 
changeColor('wbishop') 
changeColor('wqueen') 
changeColor('wking') 
changeColor('brook') 
changeColor('bpawn') 
changeColor('bknight') 
changeColor('bbishop') 
changeColor('bqueen') 
changeColor('bking') 



