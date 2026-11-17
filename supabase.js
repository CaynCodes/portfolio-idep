/*
  SUPABASE — CONFIGURAÇÃO INICIAL

  1. Crie um projeto em https://supabase.com/
  2. No painel do projeto, abra Project Settings > API.
  3. Copie a Project URL e a chave publishable (ou anon, se o painel ainda exibir esse nome).
  4. Cole os valores abaixo.

  IMPORTANTE:
  - Esta chave pública pode ser usada no navegador.
  - NUNCA coloque a chave service_role/secret neste arquivo.
  - Antes de armazenar dados, configure políticas RLS nas tabelas.
*/

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://zcldumeyoourxmlymgay.supabase.com";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable__ttHtJCwE6-xI-dK_UxUfA_2x8vJwYx";

const isConfigured =
  SUPABASE_URL.startsWith("https://") &&
  !SUPABASE_URL.includes("COLE_AQUI") &&
  SUPABASE_PUBLISHABLE_KEY.length > 20 &&
  !SUPABASE_PUBLISHABLE_KEY.includes("COLE_AQUI");

export const supabase = isConfigured
  ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;

if (supabase) {
  console.info("Supabase configurado. Cliente pronto para uso.");
} else {
  console.info(
    "Portfólio funcionando sem Supabase. Configure js/supabase.js quando criar seu projeto."
  );
}
