 window.watsonAssistantChatOptions = {
    integrationID: "1cfca68f-c4c2-4df7-acc5-31bcb5f424fa", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "dec6e2ae-557b-4314-a198-ed51e4747a69", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
