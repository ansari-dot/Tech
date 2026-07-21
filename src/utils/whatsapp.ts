export const getStartedWithWhatsApp = () => {
  const message = 
    "Hello 3Novator Tech! I would like to get started on a project. Here is my brief info:\n\n" +
    "1. Project Name / Idea:\n" +
    "2. Services Needed (Web / App / AI / Cloud):\n" +
    "3. Target Timeline:\n" +
    "4. Estimated Budget:";
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/923498880182?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};
