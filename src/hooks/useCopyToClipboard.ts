import { useState, useCallback } from 'react';

interface CopyToClipboardState {
  copied: boolean;
  error: Error | null;
}

interface CopyToClipboardReturn extends CopyToClipboardState {
  copy: (text: string) => Promise<void>;
  reset: () => void;
}

export function useCopyToClipboard(
  resetDelay = 2000
): CopyToClipboardReturn {
  const [state, setState] = useState<CopyToClipboardState>({
    copied: false,
    error: null,
  });

  const reset = useCallback(() => {
    setState({
      copied: false,
      error: null,
    });
  }, []);

  const copy = useCallback(
    async (text: string) => {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          
          try {
            document.execCommand('copy');
          } catch (err) {
            throw new Error('Copy command failed');
          } finally {
            textArea.remove();
          }
        }

        setState({
          copied: true,
          error: null,
        });

        // Reset after delay
        if (resetDelay > 0) {
          setTimeout(reset, resetDelay);
        }
      } catch (error) {
        setState({
          copied: false,
          error: error instanceof Error ? error : new Error('Copy failed'),
        });
      }
    },
    [reset, resetDelay]
  );

  return {
    copied: state.copied,
    error: state.error,
    copy,
    reset,
  };
}

// Example usage:
/*
function ContractAddress({ address }: { address: string }) {
  const { copy, copied, error } = useCopyToClipboard();

  return (
    <div>
      <span>{address}</span>
      <button
        onClick={() => copy(address)}
        aria-label="Copy contract address"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      {error && <span className="text-red-500">Failed to copy</span>}
    </div>
  );
}
*/