package de.chris.praktikum;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/smallestnumb")
public class SmallestNumbController {

    @GetMapping("/{numb}")
    SmallestNumbResult smallestNumber(@PathVariable long numb) {
        long[] smallest = SmallestNumber.smallest(numb);
        return new SmallestNumbResult(numb, smallest[0], smallest[1], smallest[2]);
    }

}
