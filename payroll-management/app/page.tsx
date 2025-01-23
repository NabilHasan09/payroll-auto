import Link from "next/link"
import * as React from 'react';
import { Stack } from "@mui/material";
import Button from '@mui/material/Button';
import MTAlogo from "../public/mtalogo.png";
import Image from "next/image";



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <Image 
          src={MTAlogo} 
          width={800} 
          height={10}
          className="mb-8"
        />
        <h1 className="text-2xl font-bold mb-12 text-center">Welcome to the MTA Intern Management Hub</h1>
        <Stack direction="row" spacing={15}>
          <Button variant="outlined">
          <Link href="/intern">
            Intern Portal
          </Link>
          </Button>
          <Button variant="outlined">
          <Link href="/manager">
            Manager Portal
          </Link>
          </Button>
          <Button variant="outlined">
          <Link href="/admin">
            Admin Portal
          </Link>
          </Button>
        </Stack>

        
      </div>

  )
}

