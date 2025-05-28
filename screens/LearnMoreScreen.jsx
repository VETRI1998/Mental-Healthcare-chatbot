// screens/LearnMoreScreen.jsx
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function LearnMoreScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Project Details</Text>

      <Text style={styles.subTitle}>Sardar Raja College of Engineering</Text>
      <Text>Raja nagar, Alangulam, TENKASI - 627808.</Text>
      <Text>B.E-Computer science and Engineering</Text>
      <Text>Mental Health Care Chatbot Using Dialo GPT</Text>
      <Text>Guide name: Prof.A.Palanisamy(HOD/CSE)</Text>
      <Text>Team members:</Text>
      <Text>E.ARUNKUMAR (952721104302)</Text>
      <Text>V.K.SELVA ESACKY (952721104304)</Text>
      <Text>M.SIVAVETRIVEL (952721104305)</Text>

      <Text style={styles.subTitle}>OBJECTIVES</Text>
      <Text>
        The objective of this project is to develop a mental health care chatbot that offers emotional
        support and empathetic conversation using DialoGPT. The chatbot is designed to provide private,
        accessible, and anonymous mental health support. The system aims to bridge the gap for individuals
        hesitant to seek traditional therapy, by offering round-the-clock conversational support within a
        mobile application environment.
      </Text>

      <Text style={styles.subTitle}>ABSTRACT</Text>
      <Text>
        Mental health issues are increasingly recognized as critical to overall well-being, yet societal stigma
        often prevents individuals from seeking help. The lack of private, empathetic, and accessible mental
        health support leaves many people suffering in silence. This project introduces a mobile application
        leveraging AI chatbot technology using DialoGPT to simulate human-like, emotionally supportive
        conversations. The chatbot aims to provide users with a safe environment to express their feelings,
        receive emotional support, and access mental wellness resources. Built using React Native for the
        frontend and FastAPI/Flask for backend integration, the system ensures a seamless, secure, and
        interactive user experience.
      </Text>

      <Text style={styles.subTitle}>EXISTING SYSTEMS</Text>
      <Text>
        Existing mental health chatbot applications such as Talkspace, Wysa, and Woebot offer mental health
        support but often come with limitations. Talkspace requires subscriptions and human therapists, which
        can limit accessibility. Wysa and Woebot are largely rule-based, restricting the personalization and depth
        of interactions. Many systems rely on predefined scripts, lacking the dynamic empathy needed to truly
        support users' diverse emotional states.
      </Text>

      <Text style={styles.subTitle}>DISADVANTAGES</Text>
      <Text>
        Rule-based systems fail to understand complex human emotions, often offering generic responses that
        may not satisfy the user's needs. Subscription-based platforms create financial barriers, reducing
        accessibility for economically disadvantaged individuals. Moreover, limited personalization and reliance
        on fixed conversation trees often lead users to feel disconnected or misunderstood.
      </Text>

      <Text style={styles.subTitle}>PROPOSED SYSTEM</Text>
      <Text>
        The proposed system is a React Native mobile application integrated with a backend powered by DialoGPT,
        an advanced conversational AI model. Unlike traditional rule-based chatbots, DialoGPT enables natural,
        dynamic conversations that adapt based on user input. The system also incorporates sentiment analysis to
        better detect user emotions and adjust responses appropriately. By combining AI empathy with real-time
        interaction, the chatbot can offer meaningful emotional support, track user mood over time, and recommend
        wellness activities as needed.
      </Text>

      <Text style={styles.subTitle}>ADVANTAGES</Text>
      <Text>
        The chatbot provides 24/7 availability, ensuring users can seek support anytime. It offers anonymity,
        reducing the stigma associated with mental health discussions. Through AI-powered adaptive conversation,
        users experience a more personalized and empathetic interaction. The system eliminates subscription costs,
        making emotional support more accessible to a broader audience. Additionally, sentiment tracking enhances
        the chatbot’s ability to respond appropriately to emotional cues.
      </Text>

      <Text style={styles.subTitle}>SYSTEM SPECIFICATION</Text>
      <Text>Hardware Requirements:</Text>
      <Text>Processor: Intel Core i5 or higher</Text>
      <Text>RAM: 8GB or more</Text>
      <Text>Storage: SSD with 256GB minimum capacity</Text>
      <Text>Software Requirements:</Text>
      <Text>Operating System: Windows 10/11</Text>
      <Text>Frontend: React Native</Text>
      <Text>Backend: FastAPI or Flask</Text>
      <Text>AI Model: DialoGPT</Text>

      <Text style={styles.subTitle}>SYSTEM ARCHITECTURE</Text>
      <Text>
        The system architecture follows a client-server model. Users interact with the mobile application,
        sending chat queries via an API to the backend server. The server routes the input to the DialoGPT model,
        which generates a contextually relevant and emotionally aware response. The response is then sent back to
        the app, creating a seamless and real-time conversation experience. The system also performs sentiment
        analysis in the background to personalize future interactions.
      </Text>

      <Text style={styles.subTitle}>MODULES</Text>
      <Text>• Authentication Module</Text>
      <Text>• Chatbot Interaction Module</Text>
      <Text>• Sentiment Analysis Module</Text>
      <Text>• Mood Tracking Module</Text>

      <Text style={styles.subTitle}>CONCLUSION</Text>
      <Text>
        This project aims to bridge the accessibility gap in mental health care by utilizing AI-driven chatbot
        technology. Through empathetic, anonymous, and round-the-clock conversation support, individuals
        hesitant to seek traditional therapy are empowered to engage in self-care. The proposed system combines
        the conversational ability of DialoGPT with sentiment analysis to deliver a truly supportive mental
        health companion.
      </Text>

      <Text style={styles.subTitle}>FUTURE ENHANCEMENT</Text>
      <Text>
        The system can be enhanced with multilingual support to reach non-English speaking users. Integration
        of emotion recognition through voice tone analysis and facial expressions will provide deeper emotional
        understanding. A recommendation engine suggesting therapy exercises, motivational content, or
        professional help based on mood patterns can also be developed. Future updates may include a peer support
        community platform and integration with wearable devices to monitor physiological indicators like heart
        rate and stress levels.
      </Text>

      <Text style={styles.subTitle}>THANK YOU</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
