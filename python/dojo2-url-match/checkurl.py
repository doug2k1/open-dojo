# -*- coding: utf-8 -*-

def checkurl(url):  
  address = url.split(":")
  if address[0] not in ['http', 'https', 'ftp']:
    return False

  if address[1][0:2] != '//':
    return False

  if address[1][2:3] == '.':
    return False

  if address[1][2:] == '':
    return False


  return True