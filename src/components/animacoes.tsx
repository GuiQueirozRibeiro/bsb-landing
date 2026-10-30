"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export function Revelar({
  children,
  atraso = 0,
  y = 28,
  className = "",
  ...rest
}: { children: React.ReactNode; atraso?: number; y?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE, delay: atraso }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const grupo: Variants = {
  oculto: {},
  visivel: (intervalo: number = 0.08) => ({ transition: { staggerChildren: intervalo } }),
};

export const SUBIR: Variants = {
  oculto: { opacity: 0, y: 32 },
  visivel: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Grupo({
  children,
  intervalo = 0.08,
  className = "",
  amount = 0.2,
}: {
  children: React.ReactNode;
  intervalo?: number;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      variants={grupo}
      custom={intervalo}
      initial="oculto"
      whileInView="visivel"
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Item({
  children,
  variantes = SUBIR,
  className = "",
  ...rest
}: { children: React.ReactNode; variantes?: Variants } & HTMLMotionProps<"div">) {
  return (
    <motion.div variants={variantes} className={className} {...rest}>
      {children}
    </motion.div>
  );
}

export function TituloPalavras({
  texto,
  destaque = "",
  className = "",
}: {
  texto: string;
  destaque?: string;
  className?: string;
}) {
  const palavras = texto.split(" ");
  const extras = destaque ? destaque.split(" ") : [];

  return (
    <motion.h1
      className={className}
      initial="oculto"
      whileInView="visivel"
      viewport={{ once: true }}
      variants={{
        oculto: {},
        visivel: { transition: { staggerChildren: 0.045 } },
      }}
    >
      {palavras.map((palavra, i) => (
        <span key={i} className="inline-block overflow-hidden py-1">
          <motion.span
            className="inline-block mr-2"
            variants={{
              oculto: { y: "105%", opacity: 0, filter: "blur(6px)" },
              visivel: { y: "0%", opacity: 1, filter: "blur(0px)", transition: { duration: 0.75, ease: EASE } },
            }}
          >
            {palavra}
          </motion.span>
        </span>
      ))}
      {extras.length > 0 && (
        <span className="inline-block text-[#F0582C]">
          {extras.map((palavra, i) => (
            <span key={i} className="inline-block overflow-hidden py-1">
              <motion.span
                className="inline-block mr-2"
                variants={{
                  oculto: { y: "105%", opacity: 0, filter: "blur(6px)" },
                  visivel: { y: "0%", opacity: 1, filter: "blur(0px)", transition: { duration: 0.75, ease: EASE } },
                }}
              >
                {palavra}
              </motion.span>
            </span>
          ))}
        </span>
      )}
    </motion.h1>
  );
}

export function Inclinar({
  children,
  intensidade = 8,
  className = "",
}: {
  children: React.ReactNode;
  intensidade?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inclinacao, setInclinacao] = useState({ rx: 0, ry: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || intensidade === 0) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setInclinacao({ rx: -y * intensidade, ry: x * intensidade });
  };

  const onMouseLeave = () => setInclinacao({ rx: 0, ry: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`[perspective:1200px] ${className}`}
    >
      <motion.div
        animate={{ rotateX: inclinacao.rx, rotateY: inclinacao.ry }}
        transition={{ type: "spring", stiffness: 220, damping: 25 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Flutuar({
  children,
  atraso = 0,
  distancia = 10,
  duracao = 4.5,
  className = "",
}: {
  children: React.ReactNode;
  atraso?: number;
  distancia?: number;
  duracao?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [-distancia, distancia, -distancia] }}
      transition={{ duration: duracao, repeat: Infinity, ease: "easeInOut", delay: atraso }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Contador({
  alvo,
  prefixo = "",
  sufixo = "",
  duracao = 2,
}: {
  alvo: number;
  prefixo?: string;
  sufixo?: string;
  duracao?: number;
}) {
  const [valor, setValor] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const visto = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!visto) return;
    let inicio = 0;
    const passos = 50;
    const incremento = alvo / passos;
    const intervalo = (duracao * 1000) / passos;

    const timer = setInterval(() => {
      inicio += incremento;
      if (inicio >= alvo) {
        setValor(alvo);
        clearInterval(timer);
      } else {
        setValor(Math.floor(inicio));
      }
    }, intervalo);

    return () => clearInterval(timer);
  }, [visto, alvo, duracao]);

  return (
    <span ref={ref}>
      {prefixo}
      {valor.toLocaleString("pt-BR")}
      {sufixo}
    </span>
  );
}

export function Faixa({
  itens,
  className = "",
}: {
  itens: string[];
  className?: string;
}) {
  return (
    <div className={`overflow-hidden whitespace-nowrap select-none ${className}`}>
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...itens, ...itens].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 shrink-0 text-sm font-semibold text-slate-700">
            <span className="h-2 w-2 rounded-full bg-[#F0582C]" />
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

