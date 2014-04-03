# -*- coding: utf-8 -*-

def mochila(lista, numero):
    if numero == 0:
        return True

    if not lista:
        return False
    
    lista2 = lista[:]
    b = lista2.pop()
    

    return mochila(lista2,numero) or mochila(lista2,numero-b)

    # lista = sorted(lista, reverse=True)
    
    # soma = 0


    # for x in lista:
    #     if(x > 0 ):    
    #         if (x == numero or soma + x == numero):
    #             return True
    #         if (soma + x <= numero):
    #             soma += x
    #             if (soma == numero):
    #                 return True
    #     else:







    # return False