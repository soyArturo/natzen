import axiosInstance from "@/config/axios";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBuilding, FaEnvelope } from "react-icons/fa6";
import Loading from "./Loading";

const SITE_KEY = "6Lf-xgssAAAAAPLREMGGH2l_mAS7mTdulj-JZkZC";

type ContactFormValues = {
  nombre: string;
  correo: string;
  telefono: string;
  motivo: string;
};

export function ContactUs() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    if (!captchaValue) {
      setCaptchaError("Por favor completa el captcha antes de enviar.");
      return;
    }
    setCaptchaError("");
    setIsSending(true);
    setTimeout(() => {
      setShowLoader(true);
    }, 400);
    console.log("Datos enviados:", data);
    console.log("Captcha:", captchaValue);

    try {
      await axiosInstance.post("enviar-correo/", {
        nombre: data.nombre,
        correo: data.correo,
        telefono: data.telefono,
        motivo: data.motivo,
        captcha_token: captchaValue,
      });
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error enviando el formulario.");
    } finally {
      setShowLoader(false);
      setIsSending(false);
      setSuccessMessage("Tu mensaje ha sido enviado correctamente.");
      setTimeout(() => setSuccessMessage(""), 5000);
      reset();
      recaptchaRef.current?.reset();
      setCaptchaValue(null);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-white"
    >
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden gradient-background ring-1 ring-gray-900/10 md:rounded-r-2xl lg:w-1/2">
                <div
                  aria-hidden="true"
                  className="absolute top-[calc(100%-13rem)] -left-56 hidden transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
                >
                  <div
                    style={{
                      clipPath:
                        "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                    }}
                    className="aspect-1155/678 w-288.75 bg-linear-to-br from-[#80caff] to-[#4f46e5] opacity-10"
                  />
                </div>
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Contacto
              </h2>

              <dl className="mt-10 space-y-4 text-base/7 text-white">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Direccion</span>
                    <FaBuilding
                      aria-hidden="true"
                      className="h-7 w-6 text-white"
                    />
                  </dt>
                  <dd>
                    Oriente #9387-A La Joya C.P. 22645
                    <br />
                    Tijuana, Baja California.
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <FaPhoneAlt
                      aria-hidden="true"
                      className="h-7 w-6 text-white"
                    />
                  </dt>
                  <dd>664.365.1959</dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <FaEnvelope
                      aria-hidden="true"
                      className="h-7 w-6 text-white"
                    />
                  </dt>
                  <dd>servicios@natzen.mx</dd>
                </div>
              </dl>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d420.9032896793003!2d-117.03879291591707!3d32.439876460083454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d936fca15ef577%3A0x780bc421f1dac837!2sBlvd.%20el%20Rosario%209387%2C%2022664%20Portico%20de%20San%20Antonio%2C%20B.C.!5e0!3m2!1sen!2smx!4v1761024266468!5m2!1sen!2smx"
                style={{
                  marginTop: "20px",
                  borderRadius: "8px",
                }}
                title="Ubicación Natzen"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-96 w-full border-4 border-secondary shadow-lg"
              ></iframe>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!isSending && (
              <motion.form
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
                className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
                initial={{ opacity: 1 }}
                animate={{ opacity: isSending ? 0 : 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {successMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6 sm:col-span-2"
                    >
                      <div className="rounded-md bg-green-50 p-4 border border-green-200 text-green-800 shadow">
                        <p className="text-sm font-medium">{successMessage}</p>
                      </div>
                    </motion.div>
                  )}
                  {/* Nombre */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900">
                      Nombre*
                    </label>
                    <input
                      {...register("nombre", { required: "Nombre requerido" })}
                      className="block w-full rounded-md bg-white px-3.5 py-2  outline-1 outline-gray-300"
                    />
                    {errors.nombre && (
                      <p className="text-red-500 text-sm">
                        {errors.nombre.message}
                      </p>
                    )}
                  </div>

                  {/* Correo */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900">
                      Correo electrónico*
                    </label>
                    <input
                      {...register("correo", {
                        required: "Correo requerido",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Correo inválido",
                        },
                      })}
                      type="email"
                      className="block w-full rounded-md px-3.5 py-2 outline-1 outline-gray-300"
                    />
                    {errors.correo && (
                      <p className="text-red-500 text-sm">
                        {errors.correo.message}
                      </p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-900">
                      Número de teléfono*
                    </label>
                    <input
                      {...register("telefono", {
                        required: "Teléfono requerido",
                      })}
                      type="tel"
                      className="block w-full rounded-md px-3.5 py-2  outline-1 outline-gray-300"
                    />
                    {errors.telefono && (
                      <p className="text-red-500 text-sm">
                        {errors.telefono.message}
                      </p>
                    )}
                  </div>

                  {/* Motivo */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-900">
                      Motivo*
                    </label>
                    <textarea
                      {...register("motivo", { required: "Motivo requerido" })}
                      rows={4}
                      className="block w-full rounded-md px-3.5 py-2  outline-1 outline-gray-300"
                    />
                    {errors.motivo && (
                      <p className="text-red-500 text-sm">
                        {errors.motivo.message}
                      </p>
                    )}
                  </div>

                  {/* RECAPTCHA */}
                  <div className="sm:col-span-2">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={SITE_KEY}
                      onChange={(v) => {
                        setCaptchaValue(v);
                        setCaptchaError(""); // limpiar error en cuanto se seleccione
                      }}
                    />

                    {captchaError && (
                      <p className="text-red-500 text-sm mt-1">
                        {captchaError}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2 mt-6 flex justify-end">
                    <button
                      type="submit"
                      className="rounded-md bg-primary px-4 py-2 text-white font-semibold shadow hover:bg-primary-darker"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showLoader && (
              <motion.div
                className="flex justify-center items-center py-48"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Loading />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
