package de.chris.praktikum;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/faroshuffle")
public class FaroShuffleController {

    @GetMapping("/{input}")
    int[] faroshuffle(@PathVariable int input) {
        return new int[] {input, FaroShuffle.faro_cycles(input)};
    }

}
