---
heading: 'Base64 in Zig'
title: "Base64 implementation in Zig"
description: "my own custom implementation of base64 in zig"
logo: "base64.jpg"
status: "active"
date: 2025-02-02T05:02:53+05:30
lastmod: 2025-02-02T05:02:53+05:30
draft: false
techStack: ["zig"]
sourceCode: "github.com/gxanshu/base64-zig"
---


My simple and efficient implementation of base64 encoding/decoding written in Zig, featuring both a library and command-line interface.

## Features

- Base64 encoding and decoding functionality
- Command-line interface for:
  - Encoding text strings
  - Encoding files
  - Help documentation
- Memory-safe implementation
- Standard base64 alphabet support

## Development

1. Make sure you have Zig installed on your system
2. Clone this repository:
```bash
git clone https://github.com/yourusername/base64-zig.git
cd base64-zig
```
3. Build the project:
```bash
zig build
```

## Usage

### Command Line Interface

The tool provides several commands:

```bash
# Encode a text string
base64-zig --text "hello its gxanshu"

# Encode a file
base64-zig --file "/path/to/your/file.pdf"

# Show help
base64-zig -h
# or
base64-zig --help
```
![image](https://github.com/user-attachments/assets/e5848045-1c01-41a8-9db0-a641eeb8265b)


### Library Usage

You can also use the base64 implementation in your Zig projects:

```zig
const Base64 = @import("root.zig").Base64;

// Initialize the encoder
const base64 = Base64.init();

// Encode
const encoded = try base64.encode(input_bytes, allocator);
defer allocator.free(encoded);

// Decode
const decoded = try base64.decode(encoded_string, allocator);
defer allocator.free(decoded);
```

## Testing

Run the built-in tests:

```bash
zig test src/root.zig
```

## Implementation Details

- Standard base64 alphabet (A-Z, a-z, 0-9, +, /)
- Padding with '=' characters when necessary
- Efficient memory usage with proper allocation and deallocation
- Error handling for invalid input
