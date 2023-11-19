import { Button, Image, PopoverBody, PopoverCloseButton, PopoverHeader } from "@chakra-ui/react";
import React from "react";
import { FeedbackType, feedbackTypes } from "..";
import Paragraph from "../../Paragraph";

interface FeedbackTypeStepProps {
  onFeedbackTypeChange: (type: FeedbackType) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
  return (
    <>
      <PopoverHeader>
        <Paragraph>Leave your feedback</Paragraph>
      </PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody
      >
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <Button
              onClick={() => props.onFeedbackTypeChange(key as FeedbackType)}
              key={key}
              variant="outline"
              size="sm"
              mr={2}
            >
              <Image boxSize='20px' src={value.image.source} alt={value.image.alt} />
              <Paragraph pl={1}>
                {value.title}
              </Paragraph>
            </Button>
          );
        })}
      </PopoverBody>
    </>
  );
}
