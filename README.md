# Silent Crash on Client-Side Error in Next.js 15

This repository demonstrates a subtle bug in Next.js 15 where client-side errors in pages can lead to a silent crash, resulting in a blank screen without any error messages.  Standard error boundaries don't seem to catch these. 

## Problem

A thrown error in a page component doesn't trigger the expected Next.js error handling mechanism. The user gets a blank page which is unexpected and makes debugging harder.

## Solution

The solution is to implement a custom error boundary that catches the thrown errors gracefully and displays an informative error message to the user.  This prevents the blank page and provides a better user experience.  Alternatively, using `next/error` can be a simpler solution for this specific scenario. 

## How to reproduce:
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Observe the blank screen (or error console message if using browser dev tools).