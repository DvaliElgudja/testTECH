Consignes:

Préfixes en entrée: ['c', 'n', 's']
Résultat attendu dans cet ordre:

    [
    'c',
    'cn',
    'cns',
    'cs',
    'n',
    'ns',
    's'
   ]

question a se poser :

est ce que l'ordre alphabetique dois etre pris en compte ou cette ordre est donner en fonction des prefixes?

si les prefices sont c,n,s alors c est considerer ranger dans l'ordre alphabetique donc nous n'avons pas besoin de specifier de ranger le result dans l'ordre alphabetique.

alors que si l'ordre etait de s,n,c cette fois ci nous serons obliger de demander le rangement si c'est necessaire. dans le cas contraire le resultat serai different de l'attendu:

     [
    's',
    'sn',
    'snc',
    'sc',
    'n',
    'nc',
    'c'
   ]

  autre question a se poser:

 

