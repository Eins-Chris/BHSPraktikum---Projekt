package de.chris.praktikum;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FaroShuffleTest {

    @Test
    public void test() {
        assertEquals(1, FaroShuffle.faro_cycles(2));
        assertEquals(2, FaroShuffle.faro_cycles(4));
        assertEquals(4, FaroShuffle.faro_cycles(6));
        assertEquals(3, FaroShuffle.faro_cycles(8));
        assertEquals(8, FaroShuffle.faro_cycles(52));
        assertEquals(540, FaroShuffle.faro_cycles(542));
        assertEquals(156, FaroShuffle.faro_cycles(1250));
        assertEquals(30, FaroShuffle.faro_cycles(1954));
    }

}