#!/usr/bin/env python3

def dna_conversion(dna: str):
    rna = []
    for item in dna:
        if item == "T":
            rna.append("U")
        else:
            rna.append(item)

    return ''.join(rna)



print(dna_conversion("TTTTT"))
print(dna_conversion("GCAT"))
