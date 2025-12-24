"use client";
import { Container, Title, Button, Text, Center } from "@mantine/core";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container>
      <Center style={{ height: "100vh" }}>
        <div>
          <Title order={1}>GrowthOps</Title>
          <Text size="xl" my="md">
            Your AI-powered CEO dashboard to align on growth targets, track KPIs,
            and plan strategically.
          </Text>
          <Link href="/dashboard" passHref>
            <Button size="lg" component="a">
              Get Started
            </Button>
          </Link>
        </div>
      </Center>
    </Container>
  );
}
