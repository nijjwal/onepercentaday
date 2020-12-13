package com.nijjwal.onepercentprojectmiddleware.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nijjwal.onepercentprojectmiddleware.models.Customer;
import com.nijjwal.onepercentprojectmiddleware.services.CustomerService;

@RestController
public class CustomerController {

	@Autowired
	private CustomerService customerService;

	@RequestMapping(value = "/customers", method = RequestMethod.GET)
	public List<Customer> getAllCustomers() {
		return customerService.getAllCustomers();
	}

	@RequestMapping(value = "/customer", method = RequestMethod.GET)
	public Customer getOneCustomerInfo(@RequestParam("userName") String userName,
			@RequestParam("lName") String lastName) {
		return customerService.getOneCustomerInfo(userName, lastName);
	}

	@RequestMapping(value = "/customers", method = RequestMethod.POST)
	public String addCustomer(@RequestBody Customer customer) {
		return customerService.addCustomer(customer);
	}

	@RequestMapping(value = "/customers/{userName}", method = RequestMethod.PUT)
	public String updateCustomer(@PathVariable String userName, @RequestBody Customer customer) {
		return customerService.updateCustomer(userName, customer);
	}

	@RequestMapping(value = "/customers/{userName}", method = RequestMethod.DELETE)
	public String deleteCustomer(@PathVariable String userName) {
		return customerService.deleteCustomer(userName);
	}
}
