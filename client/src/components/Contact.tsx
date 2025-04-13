import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: 'booking',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  const handleSelectChange = (value: string) => {
    setValue('subject', value);
  };

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
            Get In Touch
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            For bookings, collaborations, or just to say hello!
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <motion.div 
              className="text-center py-8 bg-card p-8 rounded-2xl border border-primary/20 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl text-secondary mb-4">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-foreground/80">Thank you for reaching out. I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 bg-card p-8 rounded-2xl border border-primary/20 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <Label htmlFor="name" className="block text-foreground font-medium mb-2">Name</Label>
                <Input
                  id="name"
                  {...register('name')}
                  className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg focus:outline-none focus:border-secondary transition-colors text-foreground"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-foreground font-medium mb-2">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg focus:outline-none focus:border-secondary transition-colors text-foreground"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-foreground font-medium mb-2">Subject</Label>
                <Select defaultValue="booking" onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg focus:outline-none focus:border-secondary transition-colors text-foreground">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="booking">Booking Inquiry</SelectItem>
                    <SelectItem value="collaboration">Collaboration</SelectItem>
                    <SelectItem value="licensing">Licensing</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.subject && (
                  <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-foreground font-medium mb-2">Message</Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg focus:outline-none focus:border-secondary transition-colors text-foreground resize-none"
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <div>
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full py-3 px-6 bg-gradient-to-r from-primary to-[hsl(271,68%,57%)] text-white rounded-lg transition hover:from-[hsl(271,68%,57%)] hover:to-primary font-medium"
                >
                  {contactMutation.isPending ? (
                    <>
                      <span className="animate-spin mr-2">
                        <i className="fas fa-spinner"></i>
                      </span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </div>
            </motion.form>
          )}
          
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="https://instagram.com/chtnyh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center p-6 bg-card rounded-xl transition-transform hover:scale-105 border border-primary/10"
            >
              <i className="fab fa-instagram text-3xl text-[#E1306C] mb-3"></i>
              <span className="text-foreground font-medium">@chtnyh</span>
            </a>
            
            <a 
              href="https://youtube.com/@chtnnh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center p-6 bg-card rounded-xl transition-transform hover:scale-105 border border-primary/10"
            >
              <i className="fab fa-youtube text-3xl text-[#FF0000] mb-3"></i>
              <span className="text-foreground font-medium">@chtnnh</span>
            </a>
            
            <a 
              href="https://open.spotify.com/artist/7BPea1qt2laxvuxKH0vIbV?si=EYtXa_9UQnykO0wfbiuVoA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center p-6 bg-card rounded-xl transition-transform hover:scale-105 border border-primary/10"
            >
              <i className="fab fa-spotify text-3xl text-[#1DB954] mb-3"></i>
              <span className="text-foreground font-medium">@chtnyh</span>
            </a>
            
            <a 
              href="https://music.apple.com/us/artist/chtnyh/1791359881" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center p-6 bg-card rounded-xl transition-transform hover:scale-105 border border-primary/10"
            >
              <i className="fab fa-apple text-3xl text-[#FA243C] mb-3"></i>
              <span className="text-foreground font-medium">@chtnyh</span>
            </a>
            
            <a 
              href="mailto:music@chtnnh.me" 
              className="flex flex-col items-center p-6 bg-card rounded-xl transition-transform hover:scale-105 border border-primary/10"
            >
              <i className="far fa-envelope text-3xl text-secondary mb-3"></i>
              <span className="text-foreground font-medium">music@chtnnh.me</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
