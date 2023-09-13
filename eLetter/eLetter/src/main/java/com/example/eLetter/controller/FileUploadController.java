package com.example.eLetter.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.eLetter.service.StorageService;

import java.awt.PageAttributes.MediaType;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.http.HttpHeaders;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/upload")
public class FileUploadController {

    private final StorageService storageService;

    @Autowired
    public FileUploadController(StorageService storageService) {
        this.storageService = storageService;
    }
    
    @GetMapping("/display-csv")
    public ResponseEntity<Resource> displayCsv() throws IOException {
        // Specify the path to your CSV file
        String csvFilePath = "C:\\Users\\srina\\Downloads\\data.csv";

        // Check if the file exists
        File file = new File(csvFilePath);
        if (!file.exists()) {
            return ResponseEntity.notFound().build();
        }

        // Read the CSV file as a Resource
        Path path = Paths.get(csvFilePath);
        Resource resource = new FileSystemResource(path);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDispositionFormData("attachment", "data.csv");

        // Return the CSV file as a response with appropriate headers
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(file.length())
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .body(resource);
    }

    @PostMapping
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        String fileName = storageService.storeFile(file);
        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/upload/")
                .path(fileName)
                .toUriString();
        return ResponseEntity.ok().body(fileDownloadUri);
    }

    @GetMapping("/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName) {
        Resource resource = storageService.loadFileAsResource(fileName);
        return ResponseEntity.ok()
                .header("Content-Disposition", "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }
}