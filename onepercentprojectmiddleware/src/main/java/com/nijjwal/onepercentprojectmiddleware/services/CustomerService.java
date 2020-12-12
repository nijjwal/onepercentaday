package com.nijjwal.onepercentprojectmiddleware.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.nijjwal.onepercentprojectmiddleware.models.Customer;

@Service
public class CustomerService {

	private List<Customer> customers = new ArrayList<>(

			Arrays.asList(new Customer(101, "John", "Doe", "johndoe", "password123", "john_doe_nijjwal@gmail.com"),
					new Customer(102, "Jane", "Doe", "janedoe", "password123", "jane_doe_nijjwal@gmail.com"),
					new Customer(103, "Tom", "Smith", "tomsmith", "password123", "tom_smith_nijjwal@gmail.com"))

	);

	public List<Customer> getAllCustomers() {

		return customers;
	}

	public Customer getOneCustomerInfo(String userName, String lastName) {

		for (int i = 0; i < customers.size(); i++) {
			Customer customer = customers.get(i);
			if (userName.equalsIgnoreCase(customer.getUserName())
					&& lastName.equalsIgnoreCase(customer.getLastName())) {
				return customer;
			}
		}

		return null;
	}

	public String addCustomer(Customer customer) {

		// Set new customer's id as last customer's id + 1
		int newCustomerId = customers.get(customers.size() - 1).getId() + 1;
		customer.setId(newCustomerId);

		customers.add(customer);

		return "Successfully created user with username " + customer.getUserName();
	}

	public String updateCustomer(String userName, Customer customer) {

		for (int i = 0; i < customers.size(); i++) {
			if (userName.equalsIgnoreCase(customers.get(i).getUserName())) {
				int userId = customers.get(i).getId();
				customer.setId(userId);
				customers.set(i, customer);
				return userName + " information has been updated!";
			}
		}

		return userName + " username was not found! Please verify you have entered the correct username and try again!";

	}

	public String deleteCustomer(@PathVariable String userName) {

		Iterator<Customer> itr = customers.iterator();

		while (itr.hasNext()) {
			Customer customer = itr.next();

			if (userName.equalsIgnoreCase(customer.getUserName())) {
				itr.remove();

				return userName + " has been deleted successfully!";
			}
		}

		return userName + " username does not exist!";

	}
}
