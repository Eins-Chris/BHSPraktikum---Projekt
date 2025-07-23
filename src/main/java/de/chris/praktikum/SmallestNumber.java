package de.chris.praktikum;

public class SmallestNumber {

    // https://www.codewars.com/kata/573992c724fc289553000e95

    public static long[] smallest(long n) {
        String number = Long.toString(n);
        int removeIndex = 0;
        int insertIndex = 0;
        long bestTrial = n;

        for (int rI = 0; rI < number.length(); rI++) {
            for (int iI = 0; iI < number.length(); iI++) {
                if (rI == iI) { continue; }
                String trial = number;
                char removed = trial.charAt(rI);
                trial = trial.substring(0, rI) + trial.substring(rI+1);
                trial = trial.substring(0, iI) + removed + trial.substring(iI);

                long newestTrial = Long.parseLong(trial);
                if (newestTrial < bestTrial || ( newestTrial == bestTrial && ( rI < removeIndex || ( rI == removeIndex && iI < insertIndex )))) {
                    bestTrial = newestTrial;
                    removeIndex = rI;
                    insertIndex = iI;
                }
            }
        }
        return new long[]{bestTrial, removeIndex, insertIndex};
    }
}
