def Fizzbuzz(numero):
    if numero % 3 == 0 and numero % 5 == 0:
        return 'FizzBuzz'
    elif numero % 3 == 0:
        return 'Fizz'
    elif numero % 5 == 0:
        return 'Buzz'
    else:
        return numero

if __name__ == '__main__':
    for i in range(1,30):
        retorno=Fizzbuzz(i)
        print ('%s - %s') % (i, retorno)