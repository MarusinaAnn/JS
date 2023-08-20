from datetime import datetime
import time


def getPrimeNumbers(n):
    start = datetime.now()

    result_list = []
    n = 2

    while len(result_list) < n:

        status = False;  
        result_list_numb = 0

        for result_list_numb in result_list:

            if n % result_list_numb == 0 & (n / result_list_numb != 1):
                status = True
                break


        if (status == False):
            result_list.append(n)

        n = n + 1
        
    print(datetime.now() - start)
    return result_list



if __name__ == "__main__":
    getPrimeNumbers(1)