import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";

// Clarity phones home on mount, which jsdom cannot serve.
vi.mock("react-microsoft-clarity", () => ({ clarity: { init: vi.fn() } }));

test("mounts and boots into the DEAN_OS preloader", () => {
  render(<App />);
  expect(screen.getByRole("status", { name: /loading dean longstaff's website/i })).toBeInTheDocument();
});
