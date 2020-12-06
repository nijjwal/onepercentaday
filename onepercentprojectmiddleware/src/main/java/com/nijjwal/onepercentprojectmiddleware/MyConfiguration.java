package com.nijjwal.onepercentprojectmiddleware;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MyConfiguration {

	/*
	 * @Value("${app.allow.origins}") private String allowOrigins;
	 */

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
				//.allowedOrigins("http://localhost")
				//.allowedOrigins(allowOrigins)
				.allowedMethods("PUT", "DELETE", "GET", "POST");
			}
		};
	}
}