interface ImageModalProps {
  open: boolean;
  imageSrc: string | null;
  onClose: () => void;
}

export function ImageModal({ open, imageSrc, onClose }: ImageModalProps) {
  if (!open || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Botón X en la esquina superior derecha del modal */}
      <button
        className="absolute top-4 right-4 bg-white text-black w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-xl font-bold hover:bg-gray-200 transition"
        onClick={onClose}
        aria-label="Cerrar"
      >
        ×
      </button>

      <div
        className="relative max-w-4xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic en la imagen
      >
        <img
          src={imageSrc}
          alt="Vista ampliada"
          className="rounded-lg shadow-2xl max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
}
