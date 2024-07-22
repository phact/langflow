from langflow.custom import Component
from openai import OpenAI
from astra_assistants import patch

from langflow.inputs import StrInput, MultilineInput
from langflow.schema.message import Message


class AssistantsGetAssistantName(Component):
    client = patch(OpenAI())
    display_name = "Get Assistant name"
    description = "Assistant by id"

    inputs = [
        StrInput(
            name="assistant_id",
            display_name="Assistant ID",
            info="ID of the assistant",
        ),
        MultilineInput(
            name="env_set",
            display_name="Environment Set",
            info="Dummy input to allow chaining with Dotenv Component.",
        ),
    ]

    def build(self) -> Message:
        assistant = self.client.beta.assistants.retrieve(
            assistant_id=self.assistant_id,
        )
        message = Message(
            text=assistant.name
        )
        return message
