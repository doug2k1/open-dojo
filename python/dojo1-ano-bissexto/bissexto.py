# -*- coding: utf-8 -*-

def bissexto(year):
    return (year % 4 == 0 and year % 100 != 0) or year % 400 == 0
        
#if __name__ == "__main__":

