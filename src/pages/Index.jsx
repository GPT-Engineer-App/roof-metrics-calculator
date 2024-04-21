// Aerial Roof Measurement Website
import { Box, Button, Container, Heading, Image, Input, Text, VStack } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  // Placeholder function for handling file uploads
  const handleFileUpload = (event) => {
    console.log(event.target.files);
    // Logic to handle file processing and calculations would go here
  };

  // Placeholder data for roof metrics (normally this would be set based on calculations)
  const roofMetrics = {
    area: "1200 sq ft",
    perimeter: "160 ft",
    materialsNeeded: "30 bundles of shingles",
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Roof Measurement Tool
        </Heading>
        <Text>Upload a photo of your roof to automatically calculate measurements and material requirements.</Text>

        <Box>
          <Input type="file" accept="image/*" onChange={handleFileUpload} size="lg" placeholder="Upload Roof Image" />
          <Button leftIcon={<FaUpload />} colorScheme="blue" mt={2}>
            Upload Image
          </Button>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Calculated Metrics
          </Heading>
          <Text mt={4}>
            <strong>Area:</strong> {roofMetrics.area}
          </Text>
          <Text>
            <strong>Perimeter:</strong> {roofMetrics.perimeter}
          </Text>
          <Text>
            <strong>Materials Needed:</strong> {roofMetrics.materialsNeeded}
          </Text>
        </Box>

        <Image src="https://images.unsplash.com/photo-1700480556000-b3bfa81728f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB2aWV3JTIwb2YlMjBhJTIwcm9vZnxlbnwwfHx8fDE3MTM3MzM3NTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sample Roof" />
      </VStack>
    </Container>
  );
};

export default Index;
