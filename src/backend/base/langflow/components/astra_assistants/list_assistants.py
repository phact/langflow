from langflow.custom import Component
from openai import OpenAI
from astra_assistants import patch

from langflow.schema.message import Message


class AssistantsListAssistants(Component):
    client = patch(OpenAI())
    display_name = "List Assistants"
    description = "Returns a list of assistant id's"

    def build(self) -> Message:
        assistants = self.client.beta.assistants.list()
        id_list = [assistant.id for assistant in assistants]
        message = Message(
            # get text from list
            text="\n".join(id_list)
        )
        return message
