import Link from "next/link"
import * as React from 'react';
import { Stack } from "@mui/material";
import Button from '@mui/material/Button';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
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

