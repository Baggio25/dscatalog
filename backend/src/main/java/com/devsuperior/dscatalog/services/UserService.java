package com.devsuperior.dscatalog.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dscatalog.dto.RoleDTO;
import com.devsuperior.dscatalog.dto.UserDTO;
import com.devsuperior.dscatalog.dto.UserInsertDTO;
import com.devsuperior.dscatalog.entities.Role;
import com.devsuperior.dscatalog.entities.User;
import com.devsuperior.dscatalog.repositories.RoleRepository;
import com.devsuperior.dscatalog.repositories.UserRepository;
import com.devsuperior.dscatalog.services.exceptions.DatabaseException;
import com.devsuperior.dscatalog.services.exceptions.ResourceNotFoundException;

@Service
public class UserService {

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;

	
	@Transactional(readOnly = true)
	public List<UserDTO> findAll() {
		List<User> list = userRepository.findAll();
		return list.stream().map(user -> new UserDTO(user)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public Page<UserDTO> findAllPaged(Pageable pageable) {
		Page<User> page = userRepository.findAll(pageable);
		return page.map(user -> new UserDTO(user));
	}

	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {
		Optional<User> optional = userRepository.findById(id);
		User user = optional.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new UserDTO(user);
	}

	@Transactional
	public UserDTO insert(UserInsertDTO userDTO) {
		User user = new User();
		copyDTOToEntity(userDTO, user);
		user.setPassword(passwordEncoder.encode(userDTO.getPassword()));

		user = userRepository.save(user);

		return new UserDTO(user);
	}

	@Transactional
	public UserDTO update(UserDTO userDTO, Long id) {
		try {
			User user = userRepository.getOne(id);
			copyDTOToEntity(userDTO, user);

			user = userRepository.save(user);

			return new UserDTO(user);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found: " + id);
		}

	}

	public void delete(Long id) {
		try {
			userRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found: " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}

	private void copyDTOToEntity(UserDTO userDTO, User user) {
		user.setFirstName(userDTO.getFirstName());
		user.setLastName(userDTO.getLastName());
		user.setEmail(userDTO.getEmail());

		user.getRoles().clear();
		for (RoleDTO roleDTO : userDTO.getRoles()) {
			Role role = roleRepository.getOne(roleDTO.getId());
			user.getRoles().add(role);
		}
	}

}
