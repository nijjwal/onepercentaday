package com.nijjwal.onepercentprojectmiddleware.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nijjwal.onepercentprojectmiddleware.models.Customer;

@RestController
public class CustomerController {

	@RequestMapping(value = "/customers", method = RequestMethod.GET)
	public List<Customer> getAllCustomers() {
		List<Customer> customers = new ArrayList<>();
		customers.add(new Customer(101, "John", "Doe", "johndoe", "password123", "john_doe_nijjwal@gmail.com"));
		customers.add(new Customer(102, "Jane", "Doe", "janedoe", "password123", "jane_doe_nijjwal@gmail.com"));
		customers.add(new Customer(103, "Tom", "Smith", "tomsmith", "password123", "tom_smith_nijjwal@gmail.com"));

		return customers;
	}

	@RequestMapping(value = "/customer", method = RequestMethod.GET)
	public Customer getOneCustomerInfo(@RequestParam("uid") int userId, @RequestParam("lName") String lastName) {

		List<Customer> customers = getAllCustomers();

		for (int i = 0; i < customers.size(); i++) {
			Customer customer = customers.get(i);
			if (userId == customer.getId() && lastName.equalsIgnoreCase(customer.getLastName())) {
				return customer;
			}
		}

		return null;
	}
}
