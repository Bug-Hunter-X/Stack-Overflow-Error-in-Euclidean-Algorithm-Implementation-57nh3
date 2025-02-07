# Euclidean Algorithm with Stack Overflow Bug

This repository contains a JavaScript implementation of the Euclidean algorithm with a bug that can cause a stack overflow error.  The bug occurs when one of the input numbers is 0, leading to infinite recursion. The solution demonstrates how to handle this edge case to prevent the error.

## Bug

The original `foo` function recursively calls itself without handling the case where either `a` or `b` is 0. This leads to infinite recursion and a stack overflow.

## Solution

The solution includes a check to handle the case where either `a` or `b` is 0. It also includes additional error handling to gracefully manage invalid inputs.  The GCD of any number and 0 is defined as the absolute value of that number.