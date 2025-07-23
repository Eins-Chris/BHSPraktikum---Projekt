package de.chris.praktikum;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PraktikumApplication {

	// https://spring.io/guides/tutorials/rest

	public static void main(String[] args) {
		SpringApplication.run(PraktikumApplication.class, args);
		System.out.println("Hello SpringBoot Application!");
	}

}
