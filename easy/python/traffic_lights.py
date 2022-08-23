#!/usr/bin/env python3

def traffic_lights(state: str):
   return{"red": "green", "yellow": "red", "green": "yellow"}[state]


print(traffic_lights("red"))
