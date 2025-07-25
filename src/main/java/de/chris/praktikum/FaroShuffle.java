package de.chris.praktikum;

import java.util.Arrays;

public class FaroShuffle {

    // https://www.codewars.com/kata/57bc802c615f0ba1e3000029

    public static int faro_cycles(int deck_size) {
        int[] deck = new int[deck_size];
        for (int i = 0; i < deck_size; i++) {
            deck[i] = i;
        }
        return shuffle(deck, deck.clone(), 1);
    }

    private static int shuffle(int[] deck, int[] original, int count) {
        int[] firstHalf = new int[deck.length / 2];
        int[] secondHalf = new int[deck.length / 2];

        for (int i = 0; i < deck.length / 2; i++) {
            firstHalf[i] = deck[i];
            secondHalf[i] = deck[deck.length / 2 + i];
        }

        for (int i = 0; i < deck.length; i++) {
            int value = -1;
            if (i % 2 == 0) {
                value = firstHalf[i / 2];
            } else {
                value = secondHalf[i / 2];
            }
            deck[i] = value;
        }

        if (Arrays.toString(original).equals(Arrays.toString(deck))) return count;
        return shuffle(deck, original, count+1);
    }
}
