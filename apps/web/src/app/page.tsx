'use client';
import { runFlow } from '@rnqc/encryption';

import { useEffect, useState } from 'react';

const type = 'AES';

export default function Index() {
  const [result, setResult] = useState<string | undefined>();
  useEffect(() => {
    const run = async () => {
      const res = await runFlow('Hello, world!', type);
      setResult(res);
    };
    run();
  }, []);
  return (
    <div className="container">
      <p>{result}</p>
    </div>
  );
}
