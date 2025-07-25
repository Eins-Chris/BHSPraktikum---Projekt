package de.chris.praktikum;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class SmallestNumberTest {

    private static void testing(long n, String res) {
        assertEquals(res,
                Arrays.toString(SmallestNumber.smallest(n)));
    }

    @Test
    public void test() {
        System.out.println("Basic Tests smallest");
        testing(261235, "[126235, 2, 0]");
        testing(209917, "[29917, 0, 1]");
        testing(100000, "[1, 0, 5]");
        testing(285365, "[238565, 3, 1]");
        testing(269045, "[26945, 3, 0]");
        testing(296837, "[239687, 4, 1]");
        testing(2147483647, "[1247483647, 0, 1]");
    }

    @Test
    public void single() {
        assertArrayEquals(new long[] {1,0,5}, SmallestNumber.smallest(100000));
    }

}