/**
 * Build the standard POST body for /api/ai/* chat endpoints.
 * Matches the wire payload sent by the stagging AIChatWidget exactly:
 *   { messages, context: { screenId, screenName, description, currentState,
 *     logos, colorPalette, forms, brandingId, language? } }
 * `language` is the selector's choice, e.g. { code: "es", name: "Spanish" }.
 */
export function buildChatPayload({ messages, ctx, currentState, language }) {
  const context = {
    screenId: ctx?.screenId,
    screenName: ctx?.screenName,
    description: ctx?.description,
    currentState: currentState !== undefined ? currentState : ctx?.currentState,
    logos: ctx?.logos,
    colorPalette: ctx?.colorPalette || undefined,
    forms: ctx?.forms || undefined,
    brandingId: ctx?.brandingId || undefined,
  };
  // The language the user picked in the selector; the assistant must answer in it.
  if (language?.code && language?.name) {
    context.language = { code: language.code, name: language.name };
  }
  return { messages, context };
}
